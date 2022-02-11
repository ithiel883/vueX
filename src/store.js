



const counterModule = {
    state() {
      return {
        counter: 0,
      };
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
      increase(state, payload) {
          console.log(state)
        state.counter = state.counter + payload.value;
      },
    },
    actions: {
      increment(context) {
        setTimeout(function () {
          context.commit('increment');
        }, 2000);
      },
      increase(context, payload) {
        console.log(context);
        context.commit('increase', payload);
      },
    },
    getters: {
      finalCounter(state) {
        return state.counter * 2;
      },
      normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
          return 0;
        }
        if (finalCounter > 100) {
          return 100;
        }
        return finalCounter;
      },
    },
  };


  