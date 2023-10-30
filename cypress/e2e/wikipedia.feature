Feature: Search for an article on Wikipedia

    Scenario: We should find one article and land on its page
    Given I open a web browser for Wikipedia
    When I search for "Nikola Tesla"
    Then the URL should be "https://en.wikipedia.org/wiki/Nikola_Tesla"
    And I want to see an image under the title "Nikola Tesla" on the right column
    And I want to read information about "Born," "Died," "Education" on the right column
    And I want to read a section about "Early Years"