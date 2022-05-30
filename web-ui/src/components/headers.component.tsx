import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Text } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ActionToggle } from './themeToggle.component';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

export function HeaderSimple() {
  const { classes, cx } = useStyles();

  return (
    <Header height={60} >
      <Container className={classes.header}>
        <Text
          component="span"
          align="center"
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          size="xl"
          weight={700}
          style={{ fontFamily: 'Greycliff CF, sans-serif' }}
        >
          YourAssistant <sup>web</sup>
        </Text>
        <Group spacing={5} className={classes.links}>

        </Group>
      </Container>
    </Header>
  );
}