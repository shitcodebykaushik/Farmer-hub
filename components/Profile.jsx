import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  const dashboardItems = [
    {
      id: '1',
      label: 'Payments',
      icon: 'wallet-outline',
      notification: '2 New',
      notificationStyle: styles.notificationBlue,
      onPress: () => navigation.navigate('Payments'),
    },
    {
      id: '2',
      label: 'Achievements',
      icon: 'trophy-outline',
      notification: null,
      onPress: () => navigation.navigate('Achievements'),
    },
    {
      id: '3',
      label: 'Privacy',
      icon: 'lock-closed-outline',
      notification: 'Actions Needed',
      notificationStyle: styles.notificationRed,
      onPress: () => navigation.navigate('Privacy'),
    },
    {
      id: '4',
      label: 'Log Out',
      icon: 'exit-outline',
      notification: null,
      onPress: () => handleLogout(),
    },
  ];

  const handleLogout = () => {
    alert('Logged Out!');
    navigation.replace('Splash');
  };

  const renderDashboardItem = ({ item }) => (
    <TouchableOpacity style={styles.dashboardItem} onPress={item.onPress}>
      <View style={styles.dashboardIconContainer}>
        <Ionicons name={item.icon} size={24} color="#6FBF73" />
      </View>
      <Text style={styles.dashboardLabel}>{item.label}</Text>
      {item.notification && (
        <View style={[styles.notificationBadge, item.notificationStyle]}>
          <Text style={styles.notificationText}>{item.notification}</Text>
        </View>
      )}
      <Ionicons
        name="chevron-forward-outline"
        size={20}
        color="#B2B2B2"
        style={styles.chevron}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('FarmerHome')}>
            <Ionicons name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../Asset/tea.png')}
            style={styles.avatar}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Karan Aujla</Text>
            <Text style={styles.profileRole}>Senior Agriculture</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Ionicons name="pencil-outline" size={20} color="#6FBF73" />
          </TouchableOpacity>
        </View>

        {/* Status Section */}
        <View style={styles.statusSection}>
          <TouchableOpacity style={[styles.statusChip, styles.statusAway]}>
            <Text style={styles.statusText}>😴 Away</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statusChip, styles.statusWork]}>
            <Text style={styles.statusText}>💼 At Farm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statusChip, styles.statusGaming]}>
            <Text style={styles.statusText}>🎮 Gaming</Text>
          </TouchableOpacity>
        </View>

        {/* Dashboard Section */}
        <FlatList
          data={dashboardItems}
          keyExtractor={(item) => item.id}
          renderItem={renderDashboardItem}
          style={styles.dashboardList}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileRole: {
    fontSize: 14,
    color: '#999',
  },
  statusSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statusChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusAway: {
    backgroundColor: '#E8E8E8',
  },
  statusWork: {
    backgroundColor: '#CDEACE',
  },
  statusGaming: {
    backgroundColor: '#FBE4CE',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  dashboardList: {
    marginBottom: 20,
  },
  dashboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  dashboardIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0FFF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  dashboardLabel: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  notificationBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  notificationBlue: {
    backgroundColor: '#E8F1FF',
  },
  notificationRed: {
    backgroundColor: '#FFECEB',
  },
  notificationText: {
    fontSize: 12,
    color: '#333',
  },
  chevron: {
    marginLeft: 10,
  },
});
