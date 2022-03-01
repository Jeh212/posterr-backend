
Feature: Shows data about the user PROFILE


  Scenario: Open the page

    Given that the user wants to see the page
    When the page loads
    Then needs to see the user information.

  Scenario: Load 5 recents user  post

    Given that the user want to see the profile
    When the information about user loaded
    Then i want to see the most 5 recents posts.

  Scenario: Load 5 older user post

    Given that my profile loaded
    When the newest 5 posts was loaded
    Then i want to see my 5 older posts.

  Scenario: Follow a user

    Given that want to follow a user
    When click to follow
    Then start to follow this user

  Scenario: Unfollow a user

    Given that want to unfollow a user
    When click to unfollow
    Then unfollow this user.

  Scenario: See if this user follow other users

    Given that want to see wheter am following other user
    When click on following list
    Then need to see this specific user on my following list


Business Need: User Profile Business needed

  Rule: Show User information.

  Rule: User can't post more than 5 posts a day;

  Rule: The listing of users need to load from 5 most recent posts to 5 older post, better use a pagination to this;

  Rule: Each user must have on your name at least 14 characters;

  Rule: Use only alphnumeric on the user name;

  Rule: Need to verfiy for each user, how many posts was made in one day;

  Rule: Do not create authentication service;

  Rule: Users can't follow themselves;

  Rule: Users can follow other usuário;

  Rule: Users can unfollow other users;



