Vue.component("home", {
  template: `
    <div>
    <main class="mainIndex">
        <div class=" sliderContainer">
            <div class="container">
                <div class="sliderTextConteiner">
                   <p class="sliderText1 clearfix">THE BRAND </p>
                   <p class="sliderText2 clearfix">OF LUXERIOUS <span>FASHION</span> </p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="promo">
                <div class="promoMen">
                    <div class="promoContent">
                       <div class="promoinf">
                           HOT DEAL
                        </div>
                        <div class="categories">
                            FOR MEN
                        </div>
                    </div>
                </div>
                <div class="promoAccesories">
                    <div class="promoContent">
                        <div class="promoinf">
                            LUXERIOUS & TREND
                        </div>
                        <div class="categories">
                            ACCOSERIES
                        </div>
                    </div>
                </div>
                <div class="promoWonen">
                    <div class="promoContent">
                        <div class="promoinf">
                            30% OFFER
                        </div>
                        <div class="categories">
                            WOMEN
                        </div>
                    </div>
                </div>
                <div class="promoKids">
                    <div class="promoContent">
                        <div class="promoinf">
                            NEW ARRIVALS
                        </div>
                        <div class="categories">
                            FOR KIDS
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container productContainer ">
            <div class="productTop ">
                Fetured Items
                <div class="">
                    Shop for items based on what we featured in this week
                </div>
            </div>
        
            <catalog ref="./din_comp/catalog.js"></catalog>
        
        <a href="#" class="linkAllProduct "> Browse All Product <i class="fas fa-long-arrow-alt-right"></i></a>
    </div>
</main>
    <div class="featureBanner container">
        <div class="banner">
            <div class="banneroffer">30% <span>OFFER </span></div>
            <div class="bannerFor">FOR WOMEN</div>
        </div>
        <div class="featureBox">
            <div class="featureBoxForm1">
                <div class="featureBoxFormImg">
                    <img src="../assets/img/Forma3.png" alt="">
                </div>
                <div class="featureText">Free Delivery
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with models.</p>
                </div>
            </div>
            <div class="featureBoxForm2">
                <div class="featureBoxFormImg">
                    <img src="../assets/img/Forma2.png" alt="">
                </div>
                <div class="featureText">Sales & discounts
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
            <div class="featureBoxForm3">
                <div class="featureBoxFormImg">
                    <img src="../assets/img/Forma1.png" alt="">
                </div>
                <div class="featureText">Quality assurance
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="feedback">
                <p class="feedbackText"> “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
                <p class="feedbackAuthor">Bin Burhan </p>
                <p class="feedbackAuthor2">Dhaka, Bd</p>
                <div class="paginationBox">
                    <a href="#0" class="pagination"></a>
                    <a href="#0" class="pagination active"></a>
                    <a href="#0" class="pagination"></a>
                </div>
            </div>
            <div class="subscribeBox">
                <h4>subsribe</h4>
                <p> FOR OUR NEWLETTER AND PROMOTION</p>
                <form class="subscribeForm">
                    <input type="text" placeholder="Enter Your Email">
                    <button class="">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</div> `,
});
