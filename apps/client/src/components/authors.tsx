import React from "react"

import cn from "@/lib/functions/cn"

import packageJson from "../../package.json"

const Authors: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4 text-gray-100">
      <ul>
        <li>
          Разработка -{" "}
          <ExternalUnderlineLink
            href="https://t.me/adjsky"
            target="_blank"
            rel="noreferrer"
          >
            Кирилл Тимченко
          </ExternalUnderlineLink>
        </li>
        <li>
          Дизайн -{" "}
          <ExternalUnderlineLink
            href="https://t.me/us_e_s"
            target="_blank"
            rel="noreferrer"
          >
            Катя Ус
          </ExternalUnderlineLink>
        </li>
        <li>
          Отдельный респект -{" "}
          <ExternalUnderlineLink
            href="https://t.me/gurenyuu"
            target="_blank"
            rel="noreferrer"
          >
            hechaha
          </ExternalUnderlineLink>
        </li>
        <li>
          Обратная связь -{" "}
          <ExternalUnderlineLink
            href="mailto:igorlfmartins@mail.ru"
            target="_blank"
            rel="noreferrer"
          >
            E-mail
          </ExternalUnderlineLink>
        </li>
        <li>
          Исходный код -{" "}
          <ExternalUnderlineLink
            href="https://github.com/adjsky/evil-cards"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </ExternalUnderlineLink>
        </li>
        <li>v{packageJson.version}</li>
      </ul>
    </div>
  )
}

const ExternalUnderlineLink: React.FC<
  React.PropsWithChildren<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  >
> = ({ children, className, ...props }) => {
  return (
    <a
      className={cn(
        className,
        "text-blue underline decoration-transparent transition-colors hover:decoration-current"
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default Authors
