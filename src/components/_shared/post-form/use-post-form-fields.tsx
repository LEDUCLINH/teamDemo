import { useState } from 'react'

import type {
  Files as FileType,
  Possible_Values as PossibleValueType,
  Posts as PostType,
  Post_Attributes as PostAttributeType,
  Post_Prices as PostPriceType,
} from '../../../generated/graphql'

export type UsePostFormConfig = {
  initialValue?: {
    id: number

    // FORM - General:
    category_id: number
    sub_category_id: PostType['sub_category_id']

    // FORM - Title & Description:
    title: PostType['title']
    detail: PostType['detail']
    attachment_files: Pick<FileType, 'id' | 'url' | 'name'>[]
    is_local: PostType['is_local']

    // FORM - Pricing:
    prices: Pick<PostPriceType, 'id' | 'price' | 'detail'>[]
    years_of_experience?: PostType['years_of_experience']

    // FORM - <attributes>
    attributes: (Pick<PostAttributeType, 'id' | 'possible_value_id'> & {
      property_id: PossibleValueType['property_id']
    })[]
  }
}

function usePostFormFeilds({ initialValue }: UsePostFormConfig = {}) {
  // FORM - General:
  const [category_id, setCategoryId] = useState<number | null>(
    initialValue?.category_id ?? null
  )
  const [sub_category_id, setSubCategoryId] = useState<
    PostType['sub_category_id'] | null
  >(initialValue?.sub_category_id ?? null)

  // FORM - Title & Description:
  const [title, setTitle] = useState<PostType['title'] | null>(
    initialValue?.title ?? null
  )
  const [detail, setDetail] = useState<PostType['detail'] | null>(
    initialValue?.detail ?? null
  )
  const [attachment_files, setAttachmentFiles] = useState<
    Pick<FileType, 'id' | 'url' | 'name'>[]
  >(initialValue?.attachment_files ?? [])
  const [is_local, setIsLocal] = useState<PostType['is_local'] | null>(
    initialValue?.is_local ?? null
  )

  // FORM - Pricing:
  const [prices, setPrices] = useState<
    Pick<PostPriceType, 'price' | 'detail'>[]
  >(initialValue?.prices ?? [{ price: 0, detail: '' }])
  const [years_of_experience, setYearsOfExperience] = useState<
    PostType['years_of_experience'] | null
  >(initialValue?.years_of_experience ?? null)

  // FORM - <attributes>
  const [attributes, setAttributes] = useState<
    // (Pick<PostAttributeType, 'possible_value_id'> & {
    //   property_id: PossibleValueType['property_id']
    // })[]
    any[]
  >(initialValue?.attributes ?? [])

  return {
    // FORM - General:

    category_id,
    setCategoryId,

    sub_category_id,
    setSubCategoryId,

    // FORM - Title & Description:

    title,
    setTitle,

    detail,
    setDetail,

    attachment_files,
    setAttachmentFiles,

    is_local,
    setIsLocal,

    // FORM - Pricing:

    prices,
    setPrices,

    years_of_experience,
    setYearsOfExperience,

    // FORM - <attributes>

    attributes,
    setAttributes,
  }
}

export default usePostFormFeilds
