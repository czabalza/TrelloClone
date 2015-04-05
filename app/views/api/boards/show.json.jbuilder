# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.extract! @board, :title
json.lists do
  json.array! @board.lists do |list|
    json.title list.title
    json.board_id list.board_id
    json.ord list.ord
    json.cards do
      json.array! list.cards do |card|
        json.title card.title
        json.list_id card.list_id
        json.description card.description
        json.ord card.ord
      end
    end
  end
end
