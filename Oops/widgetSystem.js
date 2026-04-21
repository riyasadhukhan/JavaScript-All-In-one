/*Create a dashboard where different widgets (e.g., WeatherWidget, NewsWidget) inherit 
from a base Widget class.
Each widget should have:
name
render() method*/

class Widget {
  constructor(name) {
    this.name = name;
  }
  render() {
    console.log(`Rendering Widget`);
  }
}

class WeatherWidget extends Widget {
  constructor(name) {
    super(name);
  }
  render() {
    console.log(`Rendering weather Widget`);
  }
}

class NewsWidget extends Widget {
  constructor(name) {
    super(name);
  }
  render() {
    console.log(`Rendering news Widget`);
  }
}

const weather = new WeatherWidget();
weather.render();
