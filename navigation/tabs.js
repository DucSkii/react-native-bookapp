// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Settings, Search, Notification } from '../tabs'
// import { Home } from '../screens'
// import Icon from 'react-native-vector-icons/FontAwesome'

// const Tab = createBottomTabNavigator()

// const tabOptions = {
//   showLabel: false,
//   style: {
//     height: '10%',
//     backgroundColor: 'red',
//   }
// }

// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={tabOptions}
//       screenOptions={({ route }) = ({
//         tabBarIcon: ({ focused }) => {
//           const tintColor = focused ? 'black' : 'white'

//           const icons = {
//             Home: 'home',
//             Search: 'search',
//             Notification: 'bell',
//             Settings: 'cog',
//           }

//           switch (route.name) {
//             case 'Home':
//               return (
//                 <Icon
//                   name={icons[route.name]}
//                   size={35}
//                   color={tintColor}
//                 />
//               )
//             case 'Search':
//               return (
//                 <Icon
//                   name={icons[route.name]}
//                   size={35}
//                   color={tintColor}
//                 />
//               )
//             case 'Notification':
//               return (
//                 <Icon
//                   name={icons[route.name]}
//                   size={35}
//                   color={tintColor}
//                 />
//               )
//             case 'Settings':
//               return (
//                 <Icon
//                   name={icons[route.name]}
//                   size={35}
//                   color={tintColor}
//                 />
//               )
//           }
//         }
//       })}
//     >
//       <Tab.Screen
//         name='Home'
//         component={Home}
//       />
//       <Tab.Screen
//         name='Search'
//         component={Search}
//       />
//       <Tab.Screen
//         name='Notification'
//         component={Notification}
//       />
//       <Tab.Screen
//         name='Settings'
//         component={Settings}
//       />
//     </Tab.Navigator>
//   )
// }

// export default Tabs