<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Role;
use App\Repository\RoleRepository;

/**
 * @Route("/api", name="api_")
 */
class RoleController extends AbstractController
{
    /**
     * @Route("/roles", name="role_list", methods = {"GET"})
     */
    public function list(RoleRepository $roleRepository)
    {
       $roles = $roleRepository->findAll();
       return $this->json($roles);
    }

    /**
     * @Route("/role/{id}", name="role_one", methods={"GET"}))
     */
    public function one(Role $role)
    {
        return $this->json($role);
    }
}
