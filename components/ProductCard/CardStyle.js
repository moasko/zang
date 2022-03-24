import PARAMS from '../../config/contes';


const Style = {
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexWrap: "wrap",
    margin: 5,
    width: (PARAMS.SCREEN_WIDTH / 2),
    height:300,
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
  }
}


export default Style