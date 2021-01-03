import type { PropType } from 'vue';
import type { PaginationProps } from './types/pagination';
import type {
  BasicColumn,
  FetchSetting,
  TableSetting,
  SorterResult,
  TableCustomRecord,
  TableRowSelection,
} from './types/table';
// import type { FormProps } from '/@/components/Form';
import { DEFAULT_SORT_FN, FETCH_SETTING } from './const';
import { propTypes } from '@bfr-ui/utils/propTypes';

// 注释看 types/table
export const basicProps = {
  clickToRowSelect: propTypes.bool.def(true),
  tableSetting: {
    type: Object as PropType<TableSetting>,
  },
  inset: propTypes.bool,
  sortFn: {
    type: Function as PropType<(sortInfo: SorterResult) => any>,
    default: DEFAULT_SORT_FN,
  },

  showTableSetting: propTypes.bool,
  autoCreateKey: propTypes.bool.def(true),
  striped: propTypes.bool.def(true),
  showSummary: propTypes.bool,

  summaryFunc: {
    type: [Function, Array] as PropType<(...arg: any[]) => any[]>,
    default: null,
  },

  canColDrag: propTypes.bool.def(true),
  api: {
    type: Function as PropType<(...arg: any[]) => Promise<any>>,
    default: null,
  },
  beforeFetch: {
    type: Function as PropType<Fn>,
    default: null,
  },
  afterFetch: {
    type: Function as PropType<Fn>,
    default: null,
  },
  handleSearchInfoFn: {
    type: Function as PropType<Fn>,
    default: null,
  },
  fetchSetting: {
    type: Object as PropType<FetchSetting>,
    default: () => {
      return FETCH_SETTING;
    },
  },
  // 立即请求接口
  immediate: propTypes.bool.def(true),

  emptyDataIsShowTable: propTypes.bool.def(true),
  // 额外的请求参数
  searchInfo: {
    type: Object as PropType<any>,
    default: null,
  },
  // 使用搜索表单
  useSearchForm: propTypes.bool,
  // // 表单配置
  // formConfig: {
  //   type: Object as PropType<Partial<FormProps>>,
  //   default: null,
  // },
  columns: {
    type: [Array] as PropType<BasicColumn[]>,
    default: () => [],
  },
  showIndexColumn: propTypes.bool.def(true),
  indexColumnProps: {
    type: Object as PropType<BasicColumn>,
    default: null,
  },
  actionColumn: {
    type: Object as PropType<BasicColumn>,
    default: null,
  },
  ellipsis: propTypes.bool.def(true),
  canResize: propTypes.bool.def(true),
  clearSelectOnPageChange: propTypes.bool,
  resizeHeightOffset: propTypes.number.def(0),
  rowSelection: {
    type: Object as PropType<TableRowSelection | null>,
    default: null,
  },
  title: {
    type: [String, Function] as PropType<string | ((data: Recordable) => string)>,
    default: null,
  },
  titleHelpMessage: {
    type: [String, Array] as PropType<string | string[]>,
  },
  maxHeight: propTypes.number,
  dataSource: {
    type: Array as PropType<Recordable[]>,
    default: null,
  },
  rowKey: {
    type: [String, Function] as PropType<string | ((record: Recordable) => string)>,
    default: '',
  },
  bordered: propTypes.bool,
  pagination: {
    type: [Object, Boolean] as PropType<PaginationProps | boolean>,
    default: null,
  },

  loading: propTypes.bool,
  rowClassName: {
    type: Function as PropType<(record: TableCustomRecord<any>, index: number) => string>,
  },

  scroll: {
    type: Object as PropType<{ x: number | true; y: number }>,
    default: null,
  },
};
