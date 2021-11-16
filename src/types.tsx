export type MenuProps = {
    showMenu(): void
    deleteSelectedItem(): void
    selected: any
    active: boolean
    termInput: string
    setTermInput: (term: string) => void
    multiple: boolean
}

export type DataProps = {
    fruits: { item: string; id: number }[]
    active: boolean
    selected: any
    setIsActive: (active: boolean) => void
    selectMultiple: (selected: string, e: any) => void
    multiple: boolean
    selectOne: (selected: string) => void
    highlight: boolean
  }
