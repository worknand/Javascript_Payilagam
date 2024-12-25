function create_html_tag(){
    content=document.getElementById("input_text").value;
    our_data=document.createTextNode(content);
    para_element = document.createElement("p"); //<p></p>
    para_element.append(our_data);

    mydiv=document.getElementById("div1");
    mydiv.appendChild(para_element);
}