import { MutationTree } from 'vuex'
import ShipmentState from './ShipmentState'
import * as types from './mutation-types'

const mutations: MutationTree <ShipmentState> = {
  [types.SHIPMENT_SEARCH_UPDATED] (state, payload) {
    payload.shipments.map((shipment: any) => {
      state.shipments.list[shipment.id] = shipment;
    })
  },
  [types.SHIPMENT_CURRENT] (state, payload) {
    state.current = payload.current;
  },
  [types.SHIPMENT_REMOVE_FROM_SHPMT_PRDTS] (state, payload) {
     delete state.shipments.list[payload.shipmentId];
  }
}
export default mutations;