import PARAMS from '../../config/contes';


const Style = {
  container: {
    flex: 1,
    padding: 12,
  },
  item: {
    margin: 6,
    flexDirection: 'row',
    flexWrap: "wrap",
    width: (PARAMS.SCREEN_WIDTH / 2 - 12),
    borderColor: "#f77918",
    borderEndWidth: PARAMS.PROCUVTS_CARDES_BORDER_WIDTH,
    borderLeftWidth: PARAMS.PROCUVTS_CARDES_BORDER_WIDTH,
    borderBottomWidth: PARAMS.PROCUVTS_CARDES_BORDER_WIDTH,
    borderTopWidth: PARAMS.PROCUVTS_CARDES_BORDER_WIDTH,
    borderRadius: 8,
    borderStyle: "dotted",
    position: 'relative'
  },
  title: {
    padding: 4,
  },
  productImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
    padding:5,
    backgroundColor: "#fdcdcd",
    borderRadius:3
  },
  addToCartBtn: {
    flex: 1,
    padding: 8,
    width: (PARAMS.SCREEN_WIDTH / 2 - 15),
    backgroundColor: "orange",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
}


export default Style