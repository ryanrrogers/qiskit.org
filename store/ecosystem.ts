import type { ActionTree, GetterTree, MutationTree } from 'vuex'

export class State {
  members: any[] = []
  tiers: string[] = []
  tierFilters: string[] = []
}

const getters = <GetterTree<State, any>> {
  /**
   * List of members filtered by selected tiers.
   */
  filteredMembers ({ members, tierFilters }): any[] {
    tierFilters = tierFilters.map((t) => { return t.toUpperCase() })
    const noTierFilters = tierFilters.length === 0

    if (noTierFilters) {
      return members
    }
    return members.filter(member => tierFilters.includes(member.tier))
  },
  tiers ({ tiers }): string[] {
    return tiers
  },
  tierFilters ({ tierFilters }): any[] {
    return tierFilters
  }
}

const mutations = <MutationTree<State>> {
  setMembers (state, members: any[]) {
    state.members = members
  },
  setTiers (state, tiers: string[]) {
    state.tiers = tiers
  },
  setTierFilters (state, tierFilters: string[]) {
    state.tierFilters = tierFilters
  }
}

const actions = <ActionTree<State, any>> {
  async fetchMembers ({ commit }): Promise<void> {
    const membersModule = await import('~/content/ecosystem/members.json')
    const members = membersModule.default || []
    commit('setMembers', members)

    const tiers = [...new Set(members.map(item => item.tier))]
    const formattedTiers = tiers.map((t) => { return t.toLowerCase() })
    commit('setTiers', formattedTiers)
  }
}

export default {
  namespaced: true,
  state: new State(),
  actions,
  mutations,
  getters
}