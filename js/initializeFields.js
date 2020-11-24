function createFieldsElements() {
    let array = [];
    if (SKForTAKS == 1) array = SKF_LIST;
    if (SKForTAKS == 2) array = TAKS_LIST;

    for(i = 0; i < array.length; i++) {
        let u = array[i];
        let q = document.createElement('p');
        let w = document.createTextNode(u[0]);
        q.appendChild(w);
        document.body.appendChild(q);

        let blockC = document.createElement('div');
        blockC.id = 'block_container';

        for(a = 1; a < u.length; a++) {
            let block = document.createElement('div');
            block.id = 'block';
            if (u[a].name != ''){
                let q = document.createElement('p');
                let w = document.createTextNode(u[a].name);
                q.appendChild(w);
                block.appendChild(q);
            }
            let x = document.createElement("TEXTAREA");
            let t = document.createTextNode(u[a].ready);
            x.appendChild(t);
            x.id = u[a].id;
            block.appendChild(x);
            blockC.appendChild(block);
        }
        let br = document.createElement('br');
        document.body.appendChild(blockC);
        document.body.appendChild(br);
        document.body.appendChild(br);
    }
}



function TAKS_fields() {
    if (SKForTAKS == 0) {
        SKForTAKS = 2;
        fields();
    }
}

function SKF_fields() {
    if (SKForTAKS == 0) {
        SKForTAKS = 1;
        fields();
    }
}

function fields() {
    setGlobalVals();
    applyInArraySKF_fields();
    applyInArrayTAKS_fields();
    createFieldsElements();
}