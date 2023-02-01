import { Server } from 'components/Server/Server'
import {
  DeleteOutline,
  CheckmarkCircle,
  LightningCircle,
} from 'components/Icons'
import Link from 'next/link'

interface InputProps {
  servers: Server[]
  editMode: boolean
  onRemove: (index: number) => void
}

const ServerList = (props: InputProps) => {
  return (
    <div>
      {props.servers.length > 0 && (
        <ul>
          {props.servers.map((server: Server, index: number) => {
            return (
              <li key={'server-' + index} className="flex pt-5">
                <Link
                  href={server.alive ? '/login' : '#'}
                  as={server.alive ? `/login` : '#'}
                >
                  <a className=" flex min-w-[480px] text-gray-900 dark:text-gray-50">
                    {!props.editMode && (
                      <div>
                        {server.alive && (
                          <CheckmarkCircle className="pt-1 text-[20px] text-green-500" />
                        )}
                        {!server.alive && (
                          <LightningCircle className="pt-1 text-[20px]" />
                        )}
                      </div>
                    )}
                    {server.url}
                  </a>
                </Link>
                {props.editMode && (
                  <button
                    className="ml-2 pt-1"
                    onClick={() => props.onRemove(index)}
                  >
                    <DeleteOutline className="fill-red-900" />
                  </button>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ServerList
