import Navigo from 'Navigo'
import '../style.css'
import Header from './components/header'
import Home from './pages/Home';
import Product from './pages/Product';
import footer from './components/footer';
import ProductDetail from './pages/ProductDetail';
import { apiGet, apiGetCallback, getImage, getImagePromise } from "./api";
import admin from './pages/admin';
const router = new Navigo('/',{linksSelector:"a"});
router.on({
  "/": function() {
    print(Home);
  },
  "/Product": function() {
    print(Product);
  },
  "/ProductDetail/:id": function (pram) {
    print(ProductDetail, pram)
  },
  "/admin": function() {
    print(admin);
  }
})
router.resolve()
// End config router

async function print(content, param) {
  document.querySelector('#header').innerHTML = Header.render()
  document.querySelector('#app').innerHTML = await content.render(param);
  document.querySelector('#footer').innerHTML = footer.render();
}
