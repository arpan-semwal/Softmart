import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="add_student" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="add_Student_form" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
};

export default Layout;
