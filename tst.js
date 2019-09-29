
const TreeModel=require('./TreeModel')
tree = new TreeModel()

root_ = tree.parse({
	id: 1, data: '_1_'
	, children: [		{ id: 11, data:'_11_', children: [{id: 111, data:'_111_'}]
		},
		{			id: 12, data:'_12_', children: [{id: 121, data:'_121_' }, {id: 122, data:'_122_' }]
		},
		{				id: 13, data:'_13_'
		}
]
})
node12 = root_.first(  (node)=> {	return node.model.id === 12 })
path=node12.getPath()
path[0].model.id //  1
path[0].model.data // '_1_'

node122 = root_.first(  (node)=> {	return node.model.id === 122 })
path=node122.getPath()
path[0].model.id //  1
path[0].model.data // '_1_'

/*
const Tree=require('easy-tree')
const tree = new Tree()
*/
