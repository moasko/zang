import PARAMS from '../../config/contes';


const Style = {
  productInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 12,
  },
  item: {
    backgroundColor: '#fff',
    margin: 6,
    flexDirection: 'row',
    flexWrap: "wrap",
    width: (PARAMS.SCREEN_WIDTH / 2 - 12),
    borderColor: "orange",
    borderStyle: "dotted",
    position: 'relative'
  },
  title: {
    padding: 4,
  },
  productImage: {
    width: "100%",
    height: 200,
    zIndex: -1,
  },
  badg: {
    position: 'absolute',
    top: 6,
    right: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: "#fdcdcd",
    borderRadius: 3
  },
  addToCartBtn: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
  },
}


export default Style