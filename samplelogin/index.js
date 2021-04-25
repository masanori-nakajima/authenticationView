export const state = () => ({
    users: [
        {
            username: 'nakajima',
            password: '19881207',
            firstname: '中島',
            lastname: '正明',
            phonenumber: '080-5555-4444',
            date: '1988/12/07',
        },
        {
          username: 'gouki',
          password: '19850915',
          firstname: '宮本',
          lastname: '豪鬼',
          phonenumber: '070-7777-7777',
          date: '1985/09/15',
        },
        {
          username: 'gorilla',
          password: '19960505',
          firstname: '兼平',
          lastname: '京',
          phonenumber: '090-8525-8525',
          date: '1996/05/05',
        },
        {
          username: 'legend',
          password: '19830301',
          firstname: '伝説の',
          lastname: 'オタク',
          phonenumber: '070-0955-0306',
          date: '1983/03/01',
        },
        {
          username: 'special',
          password: '19550502',
          firstname: 'スペシャル',
          lastname: 'ウィーク',
          phonenumber: '080-0001-0001',
          date: '1955-05-02',
        },
    ]
})

export const getters = {
  getClient (state) {
    return state.users
  },
}

export const mutations = {
  addUser (state, paylaod) {
    state.users.push(paylaod.user)
  },
  updateUser (state, paylaod) {
    state.users.forEach((user, index) => {
      if (user.firstname === paylaod.user.firstname) {
        state.users.splice(index, 1, paylaod.user)
      }
    })
  },
  removeUser (state, paylaod) {
    state.users.forEach((user, index) => {
      if (user.firstname === paylaod.user.firstname) {
        state.users.splice(index, 1)
      }
    })
  }
}