Feature: My Test Suites

  # Scenario Outline: As a user, I can log into the secure area

  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |

Scenario: Myntra Automation Test case
Given I go to Myntra Landing Page 
#Then I select Mens->T-shirt from menu
Then I search for branch "Van Heusen" in left side filter
Given I have list of all t-shirts with price and links
Then I get discounted product price and percentage
Then I print in the discounted price from more to less

# // "Goto Myntra.com
# // From the Top Menu
# // Select Mens->T-shirts
# // In the Results Page
# // In the left side filter menu
# // In Brand Section select search
# // in Text box type van heusen
# // Select Brand Van Heusen from the filtered Brands
# // Get all t-shirt list with prices and links
# // Print discounted product with price, discount percentage and link in (More Discount -> Less discount order)"

