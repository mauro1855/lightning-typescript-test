export interface LinkedObject {
  url: string
}

export interface ApiPagedResponse<T extends LinkedObject> {
  count: number
  next: string | undefined
  previous: string | undefined
  results: T[]
}

export async function fetchData<T>(url: string): Promise<T> {
  return await (await fetch(url)).json()
}

export async function fetchPagedData<T extends LinkedObject>(url: string): Promise<ApiPagedResponse<T>> {
  return await fetchData(`${url}`)
}

export async function fetchNextPage<T extends LinkedObject>(
  currentPage: ApiPagedResponse<T>
): Promise<ApiPagedResponse<T> | undefined> {
  if (currentPage.next) {
    return await fetchPagedData(currentPage.next)
  }
  return undefined
}
