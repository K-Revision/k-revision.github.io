let TAKS_LIST = [];
let TAKS_LIST_CONTEXT = [];

function applyInArrayTAKS_fields() {

    
}

function applyInArrayTAKS_CONTEXT_fields() {


}

function createTAKS_fieldsElements() {
    SKForTAKS = 2;

    for(i = 0; i < TAKS_LIST.length; i++) {
        let u = TAKS_LIST[i];
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
    setGlobalVals();
    applyInArrayTAKS_fields();
    if (SKForTAKS == 0) createTAKS_fieldsElements();
}