import { Carousel } from "antd";
import { ImageBg } from "./commonStyle";


const CaroselHome = () => {

  return (
    <Carousel autoplay>
      <div>
        <ImageBg position="center" src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/307284893_1252659312179139_6204101666988770784_n.png?stp=dst-png_p1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lnyGbrvQrcwAX-FdZ7L&_nc_oc=AQkodb33CxkKnG5rltPbsZLvqpVHtFh5lKwRW8AQWmN7b7l4ROEZh1kUzD3cHAgbFSJInSxdHIb_HgNDxD7jiU3E&_nc_ht=scontent.fhan15-2.fna&oh=03_AdRaUX80Uyu1H0RKnI8D-iMAenAeu7K44OkNj0jZNXdTKg&oe=63759BDB" />
      </div>
      <div>
        <ImageBg src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/307396429_647081050328534_292327812657941037_n.png?stp=dst-png_p1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cQXdrVXtrj8AX8KzXrN&tn=0Ok9e7iMdJSvr67S&_nc_ht=scontent.fhan15-1.fna&oh=03_AdSSv95A9Y9au3jXxYxl7KU8q5qoZmGBSUr8T24uNi7WXQ&oe=637589BE" />
      </div>
      <div>
        <ImageBg src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/309275419_897232064577460_2512353332048568115_n.png?stp=dst-png_p1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=AsLFIDIEICYAX_b1nA3&_nc_ht=scontent.fhan15-2.fna&oh=03_AdTxSQnHura_bKA-DlCo-KvMzFRyqFZScGR-azMpn09-Iw&oe=63774E41" />
      </div>
      <div>
        <ImageBg src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/308836766_632289615295700_8841566868753937444_n.png?stp=dst-png_p1080x2048&_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xbFJyHT3Lt8AX8riuWX&_nc_ht=scontent.fhan15-1.fna&oh=03_AdT-tJFpRiaDqxOVIKrKaFFA1O1ZO4LjKqrXhlZPkyWdyw&oe=63774298" />
      </div>
    </Carousel>
  )
}

export default CaroselHome;