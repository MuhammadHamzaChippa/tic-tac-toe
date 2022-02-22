(ns counter.app
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [reagent-mui.material.button :refer [button]])
  )

(defonce app-state (r/atom {:history [{:squares (vec (repeat 9 nil))
                                     :next-player "X"}]
                          :current-index 0}))

(defn current-squares []
  (get-in @app-state [:history (:current-index @app-state) :squares]))

(defn current-next-player []
  (get-in @app-state [:history (:current-index @app-state) :next-player]))


(defn get-winner [squares]
  (let [lines [[0, 1, 2]
               [3, 4, 5]
               [6, 7, 8]
               [0, 3, 6]
               [1, 4, 7]
               [2, 5, 8]
               [0, 4, 8]
               [2, 4, 6]]]
    (first (take 1 (for [line lines
                         :let [[a b c] line
                               res (if (and
                                        (nth squares a)
                                        (= (nth squares a) (nth squares b))
                                        (= (nth squares a) (nth squares c)))
                                     (nth squares a))]
                         :when (some? res)]
                     res)))))

(defn on-click-handler [i]
  (when-not (get-winner (current-squares))
    (let [current-index (:current-index @app-state)
          next-player (current-next-player)
          updated-squares (assoc (current-squares) i next-player)
          updated-next-player (if (= "X" next-player) "O" "X")
          new-state {:squares updated-squares
                     :next-player updated-next-player}]
      (swap! app-state update-in [:history]
             #(conj (subvec %1 0 (inc current-index)) new-state))
      (swap! app-state assoc-in [:current-index] (inc current-index)))))

(defn square [click-handler square-value]
  [:button
   {:class "square"
    :on-click click-handler}
   square-value])

(defn render-square [i]
  (let [value (nth (current-squares) i)]
    [square (fn [] (on-click-handler i)) [:span (cond
                                                  (= value "X") {:style {:color "red"}}
                                                  (= value "O") {:style {:color "green"}})
                                          (nth (current-squares) i)]]))

(defn board []
  [:div
   [:div.board-row
    [render-square 0]
    [render-square 1]
    [render-square 2]]
   [:div.board-row
    [render-square 3]
    [render-square 4]
    [render-square 5]]
   [:div.board-row
    [render-square 6]
    [render-square 7]
    [render-square 8]]])


(defn get-status []
  (if-let [winner (get-winner (current-squares))]
    [:div {:class "winner-div"} (str "Winner: " winner)]
    [:div {:class "status-div"} (str "Next turn: " (current-next-player))]))


(defn moves []
  (let [history (:history @app-state)]
    (for [[idx state] (map-indexed vector history)]
      ^{:key idx} [:div
                   [button
                    {:style {:margin-bottom "5px" :width "100%"}
                     :variant "contained"
                     :class "status-button"
                     :on-click #(swap! app-state assoc-in [:current-index] idx)}
                    (if (zero? idx)
                      "Go to game start"
                      (str "Go to move #: " idx))]])))

(defn Application []
  [:div.game
   [:div.game-board
    [board]]
   [:div.game-info
    [:div (get-status)]
    [:div {:style {:padding-top "3px"}} (moves)]]])

(dom/render [Application] (js/document.getElementById "app"))

(defn init []
  (println "App initialization!"))
