def depth_first_search(graph)
  current_node = graph.keys[0]
  nodes_visited = [current_node]
  stack = []
  graph[current_node].reverse.map{|c| stack.push(c)}

  until stack.empty?
    current_node = stack.pop

    graph[current_node].reverse.each do |n|
      stack.push(n) if !nodes_visited.include?(n)
    end

    nodes_visited.push(current_node) if !nodes_visited.include?(current_node)
  end
  nodes_visited
end

p depth_first_search({
  0 => [2],
  1 => [4],
  2 => [5, 0, 3],
  3 => [2],
  4 => [1, 5],
  5 => [4, 2]
})
# => [0, 2, 5, 4, 1, 3]