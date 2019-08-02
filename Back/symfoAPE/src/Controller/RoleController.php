<?php

namespace App\Controller;

use App\Entity\Role;
use App\Repository\RoleRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin", name="admin_roles")
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
        if (empty($role)) {
            return new JsonResponse(['message' => 'This role does not exist'], Response::HTTP_NOT_FOUND);
          }
        return $this->json($role);
    }
}
