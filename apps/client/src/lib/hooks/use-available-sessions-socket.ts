import { useAtom } from "jotai"

import getWsHost from "@/lib/functions/get-ws-host"

import {
  availableSessionsSocketURLAtom,
  availableSessionsStateAtom
} from "../atoms/session"
import useSocketWithUrlAtom from "./use-socket-jotai"

import type { AvailableSession } from "@evil-cards/server/src/ws/send"

const useAvailableSessions = () => {
  const [state, setState] = useAtom(availableSessionsStateAtom)

  const { closeSocket, setUrl, resetSocketUrl } = useSocketWithUrlAtom<
    unknown,
    AvailableSession[]
  >(availableSessionsSocketURLAtom, {
    onJsonMessage(sessions) {
      setState({
        loading: false,
        sessions
      })
    },
    onClose() {
      setState({
        loading: false,
        sessions: state.sessions ?? []
      })
    },
    shouldReconnect(_, { closedGracefully, nReconnects }) {
      return nReconnects < 5 && !closedGracefully
    }
  })

  return {
    async connect() {
      await getWsHost().match(
        (wsHost) => setUrl(`${wsHost}/ws/available-sessions`),
        () =>
          setState({
            loading: false,
            sessions: state.sessions ?? []
          })
      )
    },
    closeSocket,
    state,
    resetSocketUrl
  }
}

export default useAvailableSessions
