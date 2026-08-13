Feature: DuckDuckGo search
  As a visitor
  I want to use DuckDuckGo
  So that I can search the web without being tracked

  Scenario: The homepage shows a search box
    When I visit duckduckgo.com
    Then I should see a search bar

  Scenario: Searching returns results for the query
    When I visit duckduckgo.com
    And I search for "cypress e2e"
    Then I should see results related to "cypress"
