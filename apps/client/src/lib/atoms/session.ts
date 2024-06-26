import { atom } from "jotai"

import type {
  AvailableSession,
  Card,
  Configuration,
  Player,
  Status,
  Vote
} from "@evil-cards/server/src/ws/send"

export type WaitingGameState = {
  status: Extract<Status, "waiting" | "end" | "starting">
}

export type PlayingGameState = {
  status: Exclude<Status, WaitingGameState["status"]>
  hand: Card[]
  votes: Vote[]
  redCard: string
  votingEndsAt: number | null
}

export type ChatMessage = {
  id: string
  message: string
  nickname: string
  avatarId: number
  read: boolean
}

export type Session = {
  player: Player
  id: string
  configuration: Configuration
  players: Player[]
  chat: ChatMessage[]
} & (
  | {
      playing: true
      gameState: PlayingGameState
    }
  | {
      playing: false
      gameState: WaitingGameState
    }
)

export const sessionAtom = atom<Session | null>(null)

export type AvailableSessions =
  | {
      sessions: AvailableSession[]
      loading: false
    }
  | {
      sessions: undefined
      loading: true
    }
export const availableSessionsStateAtom = atom<AvailableSessions>({
  loading: true,
  sessions: undefined
})

export const reconnectingSessionAtom = atom(false)

export const sessionSocketURLAtom = atom<string | null>(null)

export const availableSessionsSocketURLAtom = atom<string | null>(null)
