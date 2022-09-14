import { Avatar, Text, Paper } from '@mantine/core';

interface UserInfoActionProps {
  id: string;
  avatar: string;
  name: string;
  email: string;
  job?: string;
}

const UserCard = ({ avatar, name, email }: UserInfoActionProps) => {
  return (
    <Paper radius="md" p="md" m="md" sx={{ backgroundColor: '#141419', width: '180px', height: '220px' }}>
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md" color="white">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email}
      </Text>
    </Paper>
  );
};

export default UserCard;
