
const TreeModel=require('./TreeModel')
tree = new TreeModel()

node01=tree.parse({id: 1, children: []})
node02=tree.parse({id: 2, children: []})
node00=tree.parse({id: 0, children: []})
node03=tree.parse({id: 3, children: []})

node00.addChild(node01)
node00.addChild(node02)
node01.addChild(node03)

path=node03.getPath()


