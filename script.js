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
let avaible_funds_count = 0.00;
let difference_per_second = 0;
let manufacturing_cost = document.querySelector(".manufacturing-cost");
let manufacturing_cost_count = 20;
let wire_button = document.querySelector(".wire-button");
let auto_clippers_cost_count = 6.10;
let auto_clippers_cost = document.querySelector(".auto-clippers-cost");
let auto_clippers_button = document.querySelector(".div-auto-clippers button");
let auto_clippers_paragraph = document.querySelector(".div-auto-clippers p");
let auto_clippers_paragraph_count = 0;
let auto_clippers = 0;
let button_marketing = document.querySelector("#marketing-button");
let marketing_cost_count = 100;
let marketing_level = document.querySelector("#marketing-level");
let marketing_level_count = 1;
let marketing_cost = document.querySelector("#marketing-cost");

let theme = document.querySelector("#theme");
let buttons = document.querySelectorAll("button");
let header = document.querySelector("header");
let body = document.querySelector("body");

theme.addEventListener("change", () => {
    if(theme.value == "discord") {
        buttons.forEach(button => {
            button.classList.add("button-discord");
        });
        header.classList.add("header-discord");
        body.classList.add("body-discord");
    } else {
        buttons.forEach(button => {
        button.classList.remove("button-discord");
        });
        header.classList.remove("header-discord");
        body.classList.remove("body-discord");
    }
});

button_marketing.addEventListener("click", () => {
    if(avaible_funds_count >= marketing_cost_count) {
        avaible_funds_count -= marketing_cost_count;
        public_demand_count *= 1.25;
        marketing_cost_count *= 2.25;
        marketing_level_count += 1;
        marketing_level.innerText = marketing_level_count;
        avaible_funds.innerText = "Avaible Funds: $ " + avaible_funds_count.toFixed(2);
        public_demand.innerText = "Public Demand: " + public_demand_count.toFixed(0) + "%"; 
        marketing_cost.innerText = "Cost: $ " + marketing_cost_count.toFixed(0);
    }
});

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
        public_demand.innerText = "Public Demand: " + public_demand_count.toFixed(0) + "%"; 
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
    if(inches_count > auto_clippers) {
        paperclip_count += auto_clippers;
        inches_count -= auto_clippers;
        paperclip.innerText = "Paperclips: " + paperclip_count;
        inches.innerText = inches_count + " inches";
        unsold_inventory_count += auto_clippers;
        unsold_inventory.innerText = "Unsold Inventory: " + unsold_inventory_count;
    } else if(inches_count > 0) {
        paperclip_count += inches_count;
        inches_count = 0;
        paperclip.innerText = "Paperclips: " + paperclip_count;
        inches.innerText = inches_count + " inches";
        unsold_inventory_count += inches_count;
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

setInterval(function() {
  
    // Calcul de la quantité vendue (en tenant compte du stock restant)
    const quantitySold = Math.min(unsold_inventory_count, Math.round(unsold_inventory_count * public_demand_count / 100));
  
    // Calcul du montant des ventes
    const salesAmount = quantitySold * price_per_clip_count;
  
    // Mise à jour du solde disponible
    avaible_funds_count += salesAmount;
    avaible_funds.innerText = "Available Funds: $" + avaible_funds_count.toFixed(2);
  
    // Mise à jour du stock restant
    unsold_inventory_count -= quantitySold;
    unsold_inventory.innerText = "Unsold Inventory: " + unsold_inventory_count;
  }, 5000);

setInterval(function () {
    manufacturing_cost_count = Math.floor(Math.random() * 14) + 14;
    manufacturing_cost.innerText = "cost: $ " + manufacturing_cost_count;

}, 3000);