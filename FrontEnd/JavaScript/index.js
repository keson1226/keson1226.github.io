var memu_num = 0;
function about_hidden(){
    let ele = document.getElementById("about-me");
    let ul_ele = ele.getElementsByTagName("ul")[0];
    let state = ul_ele.style.display;
    if(state=="none"){
        ul_ele.style.display="block";
        ele.getElementsByTagName("p")[0].innerHTML = "關於我： (點我收起)";
    }else{
        ul_ele.style.display = "none";
        ele.getElementsByTagName("p")[0].innerHTML = "關於我： (點我展開)";
    }
}

function create_obj(type){
    return document.createElement(type);
}

function add_object(){
    let f_obj = create_obj("div");
    let char = 0;
    let text = document.getElementById("memu").value;
    document.getElementById("memu").value="";
    if(text!="" && memu_num<20){
        let temp="";
        let num = memu_num;
        for(let i=0;i<text.length;i++){
            char++;
            if(char<15){
                temp+=text[i];
            }else{
                let c_obj = create_obj("p");
                c_obj.innerHTML = temp;
                temp = "";
                f_obj.appendChild(c_obj);
                char = 0;
                memu_num++;
            }
        }
        if(temp!=""){
            let c_obj = create_obj("p");
            c_obj.innerHTML = temp;
            f_obj.appendChild(c_obj);
            memu_num++;
        }
        if(memu_num<=20){
            let h_obj = create_obj("hr");
            f_obj.appendChild(h_obj);
            document.getElementsByClassName("right")[0].appendChild(f_obj);
            memu_num++;
        }else{
            alert("Memo no space!!");
            document.getElementById("memu").value="";
            memu_num = num;
        }
    }else{
        if(memu_num>=20){
            alert("Memo no space!!");
        }else{
            alert("I can't do it!!");
        }
        document.getElementById("memu").value="";
    }
}