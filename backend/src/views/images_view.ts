import Images from '../models/Image';

export default {
  render(image: Images){
    return{
      id: image.id,
      // local
      url: `http://localhost:3333/uploads/${image.path}`
      // var ambiente
      // @see: https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/
    };
  },

  renderMany(images: Images[]){
    return images.map(image => this.render(image));
  }
}
