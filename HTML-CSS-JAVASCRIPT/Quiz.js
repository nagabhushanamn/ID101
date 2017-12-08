

function doTeach() {
    let name = "Nag"; // move this data to 'heap' before teach-context get destroy
    let story='......';
    try {
        console.log(name + 'teaching topic-1');
        //throw new Error('hate-Tnr');
        setTimeout(function () {
            console.log(name + 'teaching topic-2');
            //throw new Error('hate-topic2');
            console.log('teaching topic-2-ends');
        }, 5000);
        //throw new Error('hate-Tnr');
        console.log('teaching topic-1 ends');
    } catch (e) {
        console.log('sapient caught : ' + e.message);
    }
}

doTeach();