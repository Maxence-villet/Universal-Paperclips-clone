let make_paperclip_button = document.querySelector(".make-paperclip");
let paperclip = document.querySelector("h1");
let paperclip_count = 0;
let inches = document.querySelector(".inches");
let inches_count = 1000;
let unsold_inventory = document.querySelector(".unsold-inventory");
let unsold_inventory_count = 0;
var difference = 0;
let clip_per_second = document.querySelector(".clips-per-second");
let price_per_clip = document.querySelector(".price-per-clip");
let price_per_clip_count = 0.25; 
let raise = document.querySelector(".raise");
let lower = document.querySelector(".lower");
let public_demand = document.querySelector(".public-demand");
let public_demand_count = 31;
let avaible_funds = document.querySelector(".avaible-funds");
let avaible_funds_count = 40.00;
let difference_per_second = 0;
let manufacturing_cost = document.querySelector(".manufacturing-cost");
let manufacturing_cost_count = 20;
let wire_button = document.querySelector(".wire-button");
let auto_clippers_cost_count = 6.10;
let auto_clippers_cost = document.querySelector(".auto-clippers-cost");
let auto_clippers_button = document.querySelector(".div-auto-clippers button");
let auto_clippers_paragraph = document.querySelector(".div-auto-clippers p");
let auto_clippers_paragraph_count = 1;
let auto_clippers = 0;


make_paperclip_button.addEventListener("click", () => {
    if(inches_count > 0) {
        paperclip_count += 1;
        inches_count -= 1;
        paperclip.innerText = "Paperclips: " + paperclip_count;
        inches.innerText = inches_count + " inches";
        unsold_inventory_count += 1;
        unsold_inventory.innerText = "Unsold Inventory: " + unsold_inventory_count;
    }
});

raise.addEventListener("click", () => {
    if(public_demand_count > 3) {
        price_per_clip_count += 0.01;
        price_per_clip.innerText = "Price per Clip: $ " + price_per_clip_count.toFixed(2);
        public_demand_count -= 3
        public_demand.innerText = "Public Demand: " + public_demand_count + "%"; 
    }
    
});


lower.addEventListener("click", () => {
    if(price_per_clip_count > 0.01) {
        price_per_clip_count -= 0.01;
        price_per_clip.innerText = "Price per Clip: $ " + price_per_clip_count.toFixed(2);
        public_demand_count += 3;
        public_demand.innerText = "Public Demand: " + public_demand_count + "%"; 
    }
    
});


wire_button.addEventListener("click", () => {
    if(avaible_funds_count >= manufacturing_cost_count) {
        inches_count += 1000;
        avaible_funds_count -= manufacturing_cost_count;
        inches.innerText = inches_count + " inches";
        avaible_funds.innerText = "Avaible Funds: $ " + avaible_funds_count.toFixed(2);
    }
});


auto_clippers_button.addEventListener("click", () => {
    if(avaible_funds_count >= auto_clippers_cost_count) {
        avaible_funds_count -= auto_clippers_cost_count;
        auto_clippers += 1;
        auto_clippers_cost_count += 0.10;
        auto_clippers_paragraph_count += 1;
        auto_clippers_paragraph.innerText = auto_clippers_paragraph_count;
        avaible_funds.innerText = "Avaible Funds: $ " + avaible_funds_count.toFixed(2);
        auto_clippers_cost.innerText = "cost: $ " + auto_clippers_cost_count.toFixed(2);

    }
});

setInterval(function () {
    if(inches_count > 0) {
        paperclip_count += auto_clippers;
        inches_count -= auto_clippers;
        paperclip.innerText = "Paperclips: " + paperclip_count;
        inches.innerText = inches_count + " inches";
        unsold_inventory_count += auto_clippers;
        unsold_inventory.innerText = "Unsold Inventory: " + unsold_inventory_count;
    }
}, 1000);


setInterval(function () {
    if ((paperclip_count - difference) > 0) {
        difference_per_second = (paperclip_count - difference);
    }
     clip_per_second.innerText = "Clips per Second: " + (paperclip_count - difference);
    difference = paperclip_count;
}, 1000);

setInterval(function () {
    if(unsold_inventory_count >= difference_per_second * 4) {
        if(!isNaN((unsold_inventory_count / difference * public_demand_count / 100)*2)) {
            let result = (unsold_inventory_count / difference * public_demand_count / 100) *2 ;
            avaible_funds_count += result;
            avaible_funds.innerText = "Avaible Funds: $ " + avaible_funds_count.toFixed(2);
            unsold_inventory_count -= (difference_per_second * 4).toFixed(0);

            unsold_inventory.innerText = "Unsold Inventory: " + unsold_inventory_count;
        }
        
    }
}, 5000);

setInterval(function () {
    manufacturing_cost_count = Math.floor(Math.random() * 14) + 14;
    manufacturing_cost.innerText = "cost: $ " + manufacturing_cost_count;

}, 3000);