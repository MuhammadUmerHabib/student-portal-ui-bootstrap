function students_cards() {
    var students_cards_container = document.getElementById("students_cards_container");

    var students_card_main = document.createElement("div");
    students_card_main.setAttribute("class", "col mt-3");

    var students_card_link = document.createElement("a");
    students_card_link.setAttribute("class", "nav-link active");
    students_card_link.setAttribute("aria-current", "page");
    students_card_link.setAttribute("href", "./student-details.html");

    var students_card = document.createElement("div");
    students_card.setAttribute("class", "card")

    var students_card_image = document.createElement("img")
    students_card_image.setAttribute("src", "../assests/images/student-image.png")
    students_card_image.setAttribute("class", "card-img-center m-auto p-3 rounded-circle  text-center")
    students_card_image.setAttribute("alt", "Student Image")
    students_card_image.setAttribute("width", "150px")

    var card_body = document.createElement("div")
    card_body.setAttribute("class", "card-body")
    
    var card_row1 = document.createElement("div")
    card_row1.setAttribute("class", "row")

    var card_row2 = document.createElement("div")
    card_row2.setAttribute("class", "row")

    var card_row3 = document.createElement("div")
    card_row3.setAttribute("class", "row mt-3")

    var card_body_p = document.createElement("p")
    card_body_p.setAttribute("class", "col-12 gap-1 mt-3 text-center")

    var card_body_collapse = document.createElement("div")
    card_body_collapse.setAttribute("class", "collapse")
    card_body_collapse.setAttribute("id", `collapseExample${i}`)


    ////////1

    var card_col = document.createElement("div")
    card_col.setAttribute("class", "col")

    var card_name = document.createElement("h5")
    card_name.setAttribute("class", "card-title text-center")

    var card_name_text = document.createTextNode("M. Saim")
////////////2
    var card_row2_col = document.createElement("div")
    card_row2_col.setAttribute("class", "col-6")

    var card_row2_col_p = document.createElement("p")
    card_row2_col_p.setAttribute("class", "card-text fw-light text-secondary")

    var card_row2_col_p_text = document.createTextNode("Name")

    var card_row2_col2 = document.createElement("div")
    card_row2_col2.setAttribute("class", "col-6")

    var card_row2_col2_p = document.createElement("p")
    card_row2_col2_p.setAttribute("class", "card-text fw-light text-secondary")

    var card_row2_col2_p_text = document.createTextNode("Birth")

    var card_row2_col3 = document.createElement("div")
    card_row2_col3.setAttribute("class", "col-6")

    var card_row2_col3_p = document.createElement("p")
    card_row2_col3_p.setAttribute("class", "card-text fw-semibold")

    var card_row2_col3_p_text = document.createTextNode("Male")

    var card_row2_col4 = document.createElement("div")
    card_row2_col4.setAttribute("class", "col-6")

    var card_row2_col4_p = document.createElement("p")
    card_row2_col4_p.setAttribute("class", "card-text fw-semibold")

    var card_row2_col4_p_text = document.createTextNode("Feb 1, 2009")

    ////////////////////////////////////3
    var card_row3_col = document.createElement("div")
    card_row3_col.setAttribute("class", "col-6")

    var card_row3_col_p = document.createElement("p")
    card_row3_col_p.setAttribute("class", "card-text fw-light text-secondary")

    var card_row3_col_p_text = document.createTextNode("Batch")

    var card_row3_col2 = document.createElement("div")
    card_row3_col2.setAttribute("class", "col-6")

    var card_row3_col2_p = document.createElement("p")
    card_row3_col2_p.setAttribute("class", "card-text fw-light text-secondary")

    var card_row3_col2_p_text = document.createTextNode("CNIC")

    var card_row3_col3 = document.createElement("div")
    card_row3_col3.setAttribute("class", "col-6")

    var card_row3_col3_p = document.createElement("p")
    card_row3_col3_p.setAttribute("class", "card-text fw-semibold")

    var card_row3_col3_p_text = document.createTextNode("22")

    var card_row3_col4 = document.createElement("div")
    card_row3_col4.setAttribute("class", "col-6")

    var card_row3_col4_p = document.createElement("p")
    card_row3_col4_p.setAttribute("class", "card-text fw-semibold")

    var card_row3_col4_p_text = document.createTextNode("1234567890")

    /////////
    var card_body_p_a = document.createElement("a")
    card_body_p_a.setAttribute("class", "btn-primary")
    card_body_p_a.setAttribute("data-bs-toggle", "collapse")
    card_body_p_a.setAttribute("href", `#collapseExample${i}`)
    card_body_p_a.setAttribute("role", "button")
    card_body_p_a.setAttribute("aria-expanded", "false")
    card_body_p_a.setAttribute("aria-controls", "collapseExample")

    var card_body_p_a_text = document.createTextNode("More")

    /////
    var card_body_collapse_content = document.createElement("div")
    card_body_collapse_content.setAttribute("class", "card card-body")
    
    var card_body_collapse_text = document.createTextNode("Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.");


    /////////
    students_cards_container.appendChild(students_card_main);

    students_card_main.appendChild(students_card_link);

    students_card_link.appendChild(students_card)

    students_card.appendChild(students_card_image)
    students_card.appendChild(card_body)

    card_body.appendChild(card_row1)
    card_body.appendChild(card_row2)
    card_body.appendChild(card_row3)
    card_body.appendChild(card_body_p)
    card_body.appendChild(card_body_collapse)
    
    card_row1.appendChild(card_col)
   
    card_col.appendChild(card_name)
    card_name.appendChild(card_name_text)

    card_row2.appendChild(card_row2_col)
    card_row2.appendChild(card_row2_col2)
    card_row2.appendChild(card_row2_col3)
    card_row2.appendChild(card_row2_col4)

    card_row2_col.appendChild(card_row2_col_p)
    card_row2_col2.appendChild(card_row2_col2_p)
    card_row2_col3.appendChild(card_row2_col3_p)
    card_row2_col4.appendChild(card_row2_col4_p)

    card_row2_col_p.appendChild(card_row2_col_p_text)
    card_row2_col2_p.appendChild(card_row2_col2_p_text)
    card_row2_col3_p.appendChild(card_row2_col3_p_text)
    card_row2_col4_p.appendChild(card_row2_col4_p_text)

    //////////
    card_row3.appendChild(card_row3_col)
    card_row3.appendChild(card_row3_col2)
    card_row3.appendChild(card_row3_col3)
    card_row3.appendChild(card_row3_col4)

    card_row3_col.appendChild(card_row3_col_p)
    card_row3_col2.appendChild(card_row3_col2_p)
    card_row3_col3.appendChild(card_row3_col3_p)
    card_row3_col4.appendChild(card_row3_col4_p)

    card_row3_col_p.appendChild(card_row3_col_p_text)
    card_row3_col2_p.appendChild(card_row3_col2_p_text)
    card_row3_col3_p.appendChild(card_row3_col3_p_text)
    card_row3_col4_p.appendChild(card_row3_col4_p_text)

    ///////
    card_body_p.appendChild(card_body_p_a)
    card_body_p_a.appendChild(card_body_p_a_text)

    ///////
    card_body_collapse.appendChild(card_body_collapse_content)
    card_body_collapse_content.appendChild(card_body_collapse_text)
}

for (var i = 0; i < 5; i++) {
    students_cards()
}

