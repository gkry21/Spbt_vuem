import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Cart from "@/components/contents/Cart.vue";
import JumboTron from "@/components/cmm/JumboTron.vue";
import Footer from "@/components/cmm/Footer.vue";
import Calculator from "@/components/contents/Calculator.vue";
import SeqSum from "@/components/contents/SeqSum.vue";
import Acc from "@/components/contents/Account.vue";
import Todo from "@/components/Todo2.vue";
import Parent from "@/components/slot/Parent.vue"

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/cart", name: "cart", component: Cart },
    { path: "/jumbotron", name: "jumbotron", component: JumboTron },
    { path: "/footer", name: "footer", component: Footer },
    { path: "/calculator", name: "calculator", component: Calculator },
    { path: "/seqsum", name: "seqsum", component: SeqSum },
    { path: "/acc", name: "acc", component: Acc },
    { path: "/todo", name: "todo", component: Todo },
    { path: "/parent", name: "parent", component: Parent }
  ]
});
