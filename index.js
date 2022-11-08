function invertTree(rootNode) {
    const reverseNode = node => {
        if(node === undefined) {
            return null;
        };
        
        reverseNode(node.left);
        reverseNode(node.right);
        
        let tmp = node.left;
        
        node.left = node.right;
        node.right = tmp;
        
        return node;
    }
    
    return reverseNode(rootNode);
};

const item = {
    left: {
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 3,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    },
};

console.log(invertTree(item));