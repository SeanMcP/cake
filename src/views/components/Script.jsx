import React from 'react'

export default function Script({ children, type }) {
    return <script type={type} dangerouslySetInnerHTML={{ __html: children }} />
}