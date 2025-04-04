import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import Estoque from "./modules/Stock/Estoque";
import Fornecedores from "./modules/Supplier/Fornecedores";
import Vendas from "./modules/Vendas";
import Receita from "./modules/prescriptions/Receita";
import Clientes from "./modules/clients/Clientes";
import { EstoqueAdd } from "./EstoqueAdd";
import { FormAdd } from "./modules/clients/FormAddClientes";
import { path } from "framer-motion/client";
import { DetalhesCliente } from "./modules/clients/DetalhesCliente";
import { ClientUpdate } from "./modules/clients/ClientUpdate";
import { ReceitaCadastrar } from "./modules/prescriptions/ReceitaCadastrar";
import { ReceitaDetalhes } from "./modules/prescriptions/ReceitaDetalhes";
import { ReceitaEditar } from "./modules/prescriptions/ReceitaEditar";
import { VendaAdd } from "./VendaAdd";
import { ReceitaAdd } from "./ReceitaAdd";
import { FornecedorAdd } from "./modules/Supplier/FornecedorAdd";
import FornecedorDetalhes from "./modules/Supplier/FornecedorDetalhes";
import { FornecedorEdit } from "./modules/Supplier/FornecedorEditar";
import { EstoqueCriar } from "./modules/Stock/EstoqueCriar";

export const modules = [
  {
    label: "Estoque",
    path: "/estoque",
    component: Estoque,
    icon: StorageIcon,
  },
  {
    label: "Fornecedores",
    path: "/fornecedores",
    component: Fornecedores,
    icon: PeopleIcon,
  },
  {
    label: "Vendas",
    path: "/vendas",
    component: Vendas,
    icon: SellIcon,
  },
  {
    label: "Receitas",
    path: "/receitas",
    component: Receita,
    icon: DescriptionIcon,
  },
  {
    path: "/receitas/cadastro",
    component: ReceitaCadastrar,
  },
  {
    path: "/receitas/:id",
    component: ReceitaDetalhes,
  },
  {
    path: "/receitas/editar/:id",
    component: ReceitaEditar,
  },
  {
    label: "Clientes",
    path: "/clientes",
    component: Clientes,
    icon: PersonAddIcon,
  },
  {
    path: "/clientes/cadastro",
    component: FormAdd,
  },
  {
    path: "/clientes/:id",
    component: DetalhesCliente,
  },
  {
    path: "/clientes/editar/:id",
    component: ClientUpdate,
  },
  {
    path: "/estoque/adicionar",
    component: EstoqueCriar,
  },
  {
    path: "/vendas/adicionarVenda",
    component: VendaAdd,
  },
  {
    path: "/fornecedores/adicionarFornecedor",
    component: FornecedorAdd,
  },
  {
    path: "/fornecedores/:id",
    component: FornecedorDetalhes,
  },
  {
    path: "/fornecedores/editar/:id",
    component: FornecedorEdit,
  },
  {
    path: "/fornecedores/:id",
    component: FornecedorDetalhes,
  },
  
  {
    path: "receitas/adicionarReceita",
    component: ReceitaAdd,
  },
];
