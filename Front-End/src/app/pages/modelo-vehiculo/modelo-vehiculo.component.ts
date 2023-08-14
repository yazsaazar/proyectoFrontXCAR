import { Component, OnInit } from '@angular/core';

declare var tf: any; // Declaración de TensorFlow

@Component({
  selector: 'ngx-modelo-vehiculo',
  templateUrl: './modelo-vehiculo.component.html',
  styleUrls: ['./modelo-vehiculo.component.scss']
})
export class ModeloVehiculoComponent implements OnInit {

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  modelo: any; // Agregar la variable modelo aquí

  constructor() { }

  ngOnInit(): void {
    this.cargarModelo();

    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
  }

  cargarModelo() {
    (async () => {
      try {
        console.log("Cargando modelo...");
        // Carga del modelo de TensorFlow
        this.modelo = await tf.loadLayersModel("assets/model.json");
        console.log("Modelo cargado");

        // Resto de tu código relacionado con TensorFlow
      } catch (error) {
        console.error("Error al cargar el modelo:", error);
      }
    })();
  }

  cargarImagen(event: any) {
    // Tu código para cargar la imagen
    var imagen = event.target.files[0];
    if (imagen) {
      var img = new Image();
      img.onload = () => {
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        this.ctx.drawImage(img, 0, 0, img.width, img.height);
        this.predecir(this.canvas); // Pasar el canvas como argumento
      };
      img.src = URL.createObjectURL(imagen);
    }
  }

  predecir(canvas: any) {
    // Tu código para hacer predicciones
    if (this.modelo != null) { // Usar this.modelo
      var otrocanvas = document.createElement("canvas"); // Crear otro canvas
      this.resampleSingle(canvas, 100, 100, otrocanvas);

      // Resto de tu código para predecir y mostrar resultados
      var ctx2 = canvas.getContext("2d");
      var imgData = ctx2.getImageData(0, 0, 100, 100);

      var arr = [];
      var arr100 = [];

      for (var p = 0; p < imgData.data.length; p += 4) {
        var rojo = imgData.data[p] / 255;
        var verde = imgData.data[p + 1] / 255;
        var azul = imgData.data[p + 2] / 255;

        var gris = (rojo + verde + azul) / 3;

        arr100.push([gris]);
        if (arr100.length == 100) {
          arr.push(arr100);
          arr100 = [];
        }
      }

      arr = [arr];

      var tensor = tf.tensor4d(arr);
      var resultado = this.modelo.predict(tensor).dataSync(); // Usar this.modelo
      var respuesta;
      if (resultado <= 0.5) {
        respuesta = "Autobus";
      } else {
        respuesta = "Automovil";
      }
      document.getElementById("resultado").innerHTML = respuesta;
    }
  }

  resampleSingle(canvas: any, width: number, height: number, resizeCanvas: any) {
    // Tu código para redimensionar la imagen
    var width_source = canvas.width;
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);

    var ratio_w = width_source / width;
    var ratio_h = height_source / height;
    var ratio_w_half = Math.ceil(ratio_w / 2);
    var ratio_h_half = Math.ceil(ratio_h / 2);

    var ctx = canvas.getContext("2d");
    var ctx2 = resizeCanvas.getContext("2d");
    var img = ctx.getImageData(0, 0, width_source, height_source);
    var img2 = ctx2.createImageData(width, height);
    var data = img.data;
    var data2 = img2.data;

    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
        var x2 = (i + j * width) * 4;
        var weight = 0;
        var weights = 0;
        var weights_alpha = 0;
        var gx_r = 0;
        var gx_g = 0;
        var gx_b = 0;
        var gx_a = 0;
        var center_y = (j + 0.5) * ratio_h;
        var yy_start = Math.floor(j * ratio_h);
        var yy_stop = Math.ceil((j + 1) * ratio_h);
        for (var yy = yy_start; yy < yy_stop; yy++) {
          var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
          var center_x = (i + 0.5) * ratio_w;
          var w0 = dy * dy; //pre-calc part of w
          var xx_start = Math.floor(i * ratio_w);
          var xx_stop = Math.ceil((i + 1) * ratio_w);
          for (var xx = xx_start; xx < xx_stop; xx++) {
            var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
            var w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              //pixel too far
              continue;
            }
            //hermite filter
            weight = 2 * w * w * w - 3 * w * w + 1;
            var pos_x = 4 * (xx + yy * width_source);
            //alpha
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            //colors
            if (data[pos_x + 3] < 255)
              weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }

    ctx2.putImageData(img2, 0, 0);
  }
}


