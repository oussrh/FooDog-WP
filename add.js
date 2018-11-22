{

    const postArticles = async () => {
        let file = document.querySelector('#photo').value;
        
        const url = `https://foodog.herokuapp.com/articles`;
        
        let formData = new FormData();
        formData.append('title','oussama test');
        formData.append('text','qsdqsd qsdqsdqsdqs qsdqsd');
        //formData.append("image",file);
        let response = await fetch(url, {
            method: "POST",
            headers: {
                //'Content-Type': 'multipart/form-data'  
                'Content-Type': 'application/json'
            },
            body: formData
        }).catch(error => alert(error));

        // response = await response.json();
    };


    
    document.querySelector('#submit').addEventListener('click',postArticles);

}