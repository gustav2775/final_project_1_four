/* const API = "https://github.com/gustav2775/final_project_1_four/blob/dev/src/json/"; */
const API = "./din_comp/";

const app = new Vue({
  el: "#app",
  data() {
    return {
      positiveFilter: [],
      backet_products: [],
      products:[]
    };
  },
  methods: {
    getJson(url) {
        return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
      },
      
    /* postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    }, */
  },
  template: `
  <div>
    <header class="header">
        <div class="container">
            <div class="topForm">
                <div class="logo">
                    <a href="#">
                        <img src="./assets/img/logo.png" alt="logo">
                        Bran<span>D</span>
                    </a>
                </div>

                <search ref="./din_comp/catalog_filter.js"></search>

                <backet ref="./din_comp/backet.js"></backet>

                <div class="MyAccountTop">
                    <button class="btn  dropdown-toggle MyAccountBtn">
                        My Account
                    </button>
                </div>
            </div>
            <nav class="topNav">
                <a class="nav-link" href="index.html">Home</a>
                <a class="nav-link" href="product.html">MAN</a>
                <a class="nav-link" href="product.html">WOMEN</a>
                <a class="nav-link" href="#">KIDS</a>
                <a class="nav-link" href="#">ACCOSERIES</a>
                <a class="nav-link" href="#">Featured</a>
                <a class="nav-link" href="#">Hot Deals </a>
            </nav>
            <div class="TopCrumb">

                <div class="leftPatch">
                    New Arrivals
                </div>
                <nav class="rightPatch">
                    <ol class="breadcrumb justify-content-end">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Men</a></li>
                        <li class="breadcrumb-item active" aria-current="page">New Arrivals</li>
                    </ol>
                </nav>
            </div>
        </div>
    </header>

    <home ref="Home.js"> </home>

    <footer class="footer">
        <div class="footerContent">
            <div class="container">
                <div class="footerContentInf">
                    <div class="logo">
                        <a href="#" class="">
                            <img src="./assets/img/logo.png" alt="logo">
                            Bran<span>D</span>
                        </a>
                    </div>

                    <p class="footerPresentation">Objectively transition extensive data rather than cross functional
                        solutions.
                        Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly
                        syndicate an expanded array of processes and cross-unit partnerships.
                    </p>

                    <p class="footerPresentation">
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                    </p>
                </div>

                <nav class="footerContentNav">
                    <div class="">
                        <h4>Company</h4>
                        <a href="#" class="nav-link">Home </a>
                        <a href="#" class="nav-link">Shop</a>
                        <a href="#" class="nav-link">About</a>
                        <a href="#" class="nav-link">How It Works</a>
                        <a href="#" class="nav-link">Contact</a>
                    </div>
                    <div class="">
                        <h4>Information</h4>
                        <a href="#" class="nav-link">Tearms & Condition </a>
                        <a href="#" class="nav-link">Privacy Policy</a>
                        <a href="#" class="nav-link">How to Buy</a>
                        <a href="#" class="nav-link">How to Sell</a>
                        <a href="#" class="nav-link">Promotion</a>
                    </div>
                    <div class="">
                        <h4>Shop category</h4>
                        <a href="#" class="nav-link">Men </a>
                        <a href="#" class="nav-link">Women</a>
                        <a href="#" class="nav-link">Child</a>
                        <a href="#" class="nav-link">Apparel</a>
                        <a href="#" class="nav-link">Brows All</a>
                    </div>

                </nav>
            </div>
        </div>

        <div class="container">
            <span class="footerLeft">
                © 2017 Brand All Rights Reserved.
            </span>
            <nav class=" footernav">
                <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a>
                <a href="#" target="_blank"><i class="fab fa-google"></i></a>
            </nav>
        </div>
    </footer>
    </div>
    `,
});
