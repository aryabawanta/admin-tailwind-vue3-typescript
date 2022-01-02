const state = () => {
  return {
    menu: [
      {
        icon: 'HomeIcon',
        pageName: 'dashboard',
        title: 'Overview'
      },
      {
        icon: 'ActivityIcon',
        pageName: 'top-menu-apps',
        title: 'Tools',
        subMenu: [
          {
            icon: 'UsersIcon',
            pageName: 'top-menu-users',
            title: 'Users',
            subMenu: [
              {
                icon: '',
                pageName: 'top-menu-users-layout-1',
                title: 'Layout 1'
              },
              {
                icon: '',
                pageName: 'top-menu-users-layout-2',
                title: 'Layout 2'
              },
              {
                icon: '',
                pageName: 'top-menu-users-layout-3',
                title: 'Layout 3'
              }
            ]
          },
          {
            icon: 'TrelloIcon',
            pageName: 'top-menu-profile',
            title: 'Profile',
            subMenu: [
              {
                icon: '',
                pageName: 'top-menu-profile-overview-1',
                title: 'Overview 1'
              },
              {
                icon: '',
                pageName: 'top-menu-profile-overview-2',
                title: 'Overview 2'
              },
              {
                icon: '',
                pageName: 'top-menu-profile-overview-3',
                title: 'Overview 3'
              }
            ]
          },
          {
            icon: 'InboxIcon',
            pageName: 'top-menu-inbox',
            title: 'Inbox'
          },
          {
            icon: 'FolderIcon',
            pageName: 'top-menu-file-manager',
            title: 'File Manager'
          },
          {
            icon: 'CreditCardIcon',
            pageName: 'top-menu-point-of-sale',
            title: 'Point of Sale'
          },
          {
            icon: 'MessageSquareIcon',
            pageName: 'top-menu-chat',
            title: 'Chat'
          },
          {
            icon: 'FileTextIcon',
            pageName: 'top-menu-post',
            title: 'Post'
          },
          {
            icon: 'CalendarIcon',
            pageName: 'top-menu-calendar',
            title: 'Calendar'
          },
          {
            icon: 'EditIcon',
            pageName: 'top-menu-crud',
            title: 'Crud',
            subMenu: [
              {
                icon: '',
                pageName: 'top-menu-crud-data-list',
                title: 'Data List'
              },
              {
                icon: '',
                pageName: 'top-menu-crud-form',
                title: 'Form'
              }
            ]
          }
        ]
      },
      {
        icon: 'LayoutIcon',
        pageName: 'top-menu-layout',
        title: 'Libraries',
        subMenu: [
          {
            icon: '',
            pageName: 'top-menu-wizards',
            title: 'Javascript',
            subMenu: [
              {
                icon: '',
                pageName: 'top-menu-wizard-layout-1',
                title: 'Layout 1'
              },
              {
                icon: '',
                pageName: 'top-menu-wizard-layout-2',
                title: 'Layout 2'
              },
              {
                icon: '',
                pageName: 'top-menu-wizard-layout-3',
                title: 'Layout 3'
              }
            ]
          },
          {
            icon: '',
            pageName: 'top-menu-wizards',
            title: 'Laravel',
            subMenu: [
              {
                icon: '',
                pageName: 'top-menu-wizard-layout-1',
                title: 'Layout 1'
              },
              {
                icon: '',
                pageName: 'top-menu-wizard-layout-2',
                title: 'Layout 2'
              },
              {
                icon: '',
                pageName: 'top-menu-wizard-layout-3',
                title: 'Layout 3'
              }
            ]
          }
        ]
      }
    ]
  }
}

// getters
const getters = {
  menu: (state) => state.menu
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
